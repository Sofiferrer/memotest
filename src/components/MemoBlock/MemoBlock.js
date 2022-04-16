import './MemoBlock.css';

const MemoBlock = ({ animating, handleMemoClick, memoBlock }) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={`memo-block inner ${memoBlock.flipped && 'memo-block flipped'}`}>
            <div className="memo-card front">
            </div>
            <div className="memo-card back">
                {memoBlock.emoji}
            </div>
        </div>
    </div>
)

export default MemoBlock;