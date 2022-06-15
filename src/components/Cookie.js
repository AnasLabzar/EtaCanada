import React from 'react'
import Modal from "./Modal";

const {
    useState,
    useEffect
} = React;

const ModalValidat = () => {

        const [showModal, setshowModal] = useState(false);

        useEffect(() => {
            setInterval(() => {
                setshowModal(true);
            }, 3000);
        }, [1])

        if (showModal === true) {
            document.getElementById("body").onmouseover = function () {
                MouseOver()
            };

            function MouseOver() {
                localStorage.setItem("AccessUser", "True")
            }
        }

        return ( 
        <> { showModal && <Modal CloseModal = {setshowModal}/> } </>
            );
        };

        export default ModalValidat