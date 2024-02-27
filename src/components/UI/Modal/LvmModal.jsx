import React from 'react';
import cl from './LvmModal.module.css';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../store/actions/modalsActions";
import DialogContainer from "../../DialogContainer";
import UsualContainer from "../../UsualContainer";
const LvmModal = ({children}) => {
    const dispatch = useDispatch();

    const isVisible = useSelector(state => state.modals.isVisible)
    const data = useSelector(state => state.modals.content)
    const modalType = useSelector(state => state.modals.type)

    const rootClasses = [cl.myModal]
    const rootClassesContent = [cl.myModalContent]

    if (isVisible) {
        rootClasses.push(cl.active);
        rootClassesContent.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => (dispatch(closeModal()))} >
            <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
                {(() => {
                    switch (modalType) {
                        case 'call_text':
                            return <DialogContainer callText={data} />;
                        case 'usual':
                            return <UsualContainer textData={data} />;
                        default:
                            return <UsualContainer textData={data} />;
                    }
                })()}
            </div>
        </div>
    );
};

export default LvmModal;