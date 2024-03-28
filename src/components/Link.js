import React from 'react';
import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

const Link = ({to, children, className, activeClassName}) => {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(className, 
        'text-blue-500',
        currentPath === to && activeClassName
    )
    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    )
}
export default Link;