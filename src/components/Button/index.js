import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text,
    primary,
    outline,
    small,
    large,
    disabled,
    round,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...props
}) {
    let Comp = "button";
    const _props = { onClick, ...props };

    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith("on") && typeof _props[key] === "function") {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = "a";
    }

    const classes = cx("wrapper", {
        [className]: className,
        text,
        primary,
        outline,
        small,
        large,
        disabled,
        round,
    });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
