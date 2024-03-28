import React from "react";
import Button from "../components/Button";
import { FaBeer } from "react-icons/fa";

 function ButtonPage () {

    return (
        <Button rounded primary outline >
            <FaBeer/>
            I AM WARNING BUTTON
        </Button>
    )
}
export default ButtonPage;