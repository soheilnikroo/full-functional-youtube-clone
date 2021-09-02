import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${input}`);
  };
  return (
    <div className="border border-dark header">
      <FaBars
        onClick={() => handleToggleSidebar()}
        className="header__menu"
        size={26}
      />

      <div className="header__logo">
        <svg
          viewBox="0 0 90 20"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{
            pointerEventsr: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g
            viewBox="0 0 90 20"
            preserveAspectRatio="xMidYMid meet"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="#FF0000"
                class="style-scope yt-icon"
              ></path>
              <path
                d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                fill="white"
                class="style-scope yt-icon"
              ></path>
            </g>
            <g class="style-scope yt-icon">
              <g id="youtube-paths" class="style-scope yt-icon">
                <path
                  fill="#ffff"
                  d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#ffff"
                  d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Search"
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="data:image/png;base64,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"
          alt="user profile"
        />
      </dic>
    </div>
  );
};

export default Header;
