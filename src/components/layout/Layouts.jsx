import React from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Layout } from "@consta/uikit/Layout";

const Layouts = () => {

  const news = [
      {
        id: 1,
        title: "Новый закон о цифровой трансформации",
        description: "Правительство вводит новые правила для технологических компаний",
      },
      {
        id: 2,
        title: "Космический корабль успешно достиг Марса",
        description: "Испанская миссия Нового горизонта совершила исторический полет",
      },
      {
        id: 3,
        title: "Внедрение искусственного интеллекта в образование",
        description: "Новые технологии помогут улучшить качество образования",
      },
      {
        id: 4,
        title: "Рекордный рост продаж электромобилей",
        description: "Автомобильная индустрия переходит на энергоэффективные технологии",
      },
      {
        id: 5,
        title: "Новое открытие в области медицины",
        description: "Научный коллектив обнаружил эффективное лечение редкой болезни",
      },
    ];

    return (
      <Layout className="news-list" direction="column">
          {news.map((item) => (
              <Card
                  key={item.id}
                  verticalSpace="xl"
                  horizontalSpace="xl"
                  shadow
                  className="news-item"
              >
                  <div className="news-content">
                      <Text size="xl" weight="bold" className="news-title">
                          {item.title}
                      </Text>
                      <Text size="m" view="secondary" className="news-description">
                          {item.description}
                      </Text>

                  </div>
              </Card>
          ))}
      </Layout>
  );
};

export default Layouts;

