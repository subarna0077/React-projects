import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type ResultProps = {
    targetTime: number,
    remainingTime: number,
    resetModal: any
};


const ResultModal: ForwardRefRenderFunction<HTMLDialogElement, ResultProps> = 
    ({ targetTime, remainingTime, resetModal }, ref) => {

      const lost = remainingTime <= 0 ;
      const score = Math.round((1- remainingTime / (targetTime * 1000)) * 100);
        return (
            <dialog className='result-modal' ref={ref} onClose={resetModal}>
               {lost ?? <h2>You lost</h2>}
               {!lost && <h2>Score : {score}</h2>}
                
                <p>The target time was <strong>{targetTime} seconds</strong></p>
                <p>You stopped the timer with <strong>{remainingTime/1000} seconds left</strong></p>
                <form method='dialog' onSubmit={resetModal}>
                    <button>Close</button>
                </form>
            </dialog>
        );
    };

export default forwardRef(ResultModal);
