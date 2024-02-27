import React from 'react';
import classes from '../components/compstyles/Dialog.module.css';

const DialogContainer = ({callText}) => {

    const dialogues = callText.split('\n');

    return (
        <div>
            {dialogues.map((dialogue, index) => {
                if (dialogue.trim() !== '') {
                    const isAdmin = dialogue.startsWith('Администратор:');
                    const labelClass = isAdmin ? classes.adminLabel : classes.clientLabel;

                    return (
                        <div key={index} className={`dialogueContainer ${isAdmin ? classes.adminLine : classes.clientLine}`}>
                            <span className={labelClass}>{dialogue.substr(0, dialogue.indexOf(':') + 1)}</span>
                            <span>{dialogue.substr(dialogue.indexOf(':') + 1)}</span>
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default DialogContainer;