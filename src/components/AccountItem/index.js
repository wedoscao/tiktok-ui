import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660777200&x-signature=V%2BCIq%2F3GV8wuEZjEzJRp3Ja2pJI%3D"
                alt="Hoa"
            />
            <div className={cx("info")}>
                <h3 className={cx("name")}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h3>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
