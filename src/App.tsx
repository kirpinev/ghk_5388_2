import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import icon1 from "./assets/icon1.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import image from "./assets/image.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thx, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag("event", "5388_dalee_click", {
      variant_name: "ghk_5388_2",
    });

    setLoading(true);
    sendDataToGA({ option: "" }).then(() => {
      setLoading(false);
      setThx(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (thx) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img
            src={image}
            alt="Картинка"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </div>

        <Gap size={24} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="medium"
          className={appSt.productsTitle}
        >
          Семейный счёт
        </Typography.TitleResponsive>
        <Gap size={4} />
        <Typography.Text
          tag="p"
          view="primary-large"
          style={{ marginBottom: 0 }}
        >
          Откроем счёт для вас и близких
        </Typography.Text>

        <Gap size={16} />

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={icon4}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                weight="bold"
                style={{ marginBottom: 0 }}
              >
                Бесплатное обслуживание
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Навсегда и без условий
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon1}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                weight="bold"
                style={{ marginBottom: 0 }}
              >
                Бюджет семьи в одном месте
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Покупки и кэшбек
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon3}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                weight="bold"
                style={{ marginBottom: 0 }}
              >
                Общие финансы
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Без лишних переводов друг другу
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon5}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                weight="bold"
                style={{ marginBottom: 0 }}
              >
                Настройка истории
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Выбирайте, какие траты видны участникам
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile loading={loading} onClick={submit} block view="primary">
          К открытию счёта
        </ButtonMobile>
      </div>
    </>
  );
};
