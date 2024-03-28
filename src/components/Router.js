import useNavigation from "../hooks/useNavigation";

const Route  = ({children, path}) => {
    const { currentPath }  = useNavigation();

    if (path === currentPath) {
        return children;
    }
}

export default Route;