import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthTokenAction, getUserinfoAction } from './api_actions';

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await getAuthTokenAction(username, password);
            if (response.accessToken) {
                localStorage.setItem('token', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                return response;
            }
            throw new Error('Invalid credentials');
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export function useAuth() {
    const token = localStorage.getItem('authToken')

    return {
        isAuth: !!token,
    };
}

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const userData = await getUserinfoAction();
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        } catch (error) {
            return rejectWithValue('Failed to fetch user info');
        }
    }
);

const auth = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        error: null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.refreshToken = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },
});

export const { logout } = auth.actions;
export default auth.reducer;