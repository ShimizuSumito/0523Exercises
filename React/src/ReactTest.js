import React, {useState} from 'react';
import Main from './Main';

function ReactTest()
{
    const [boolean, setBoolean] = useState(false);
    const [difficulty, setDifficulty] = useState(1);
    var jsx = null;

    const handleCompletion = () => {setBoolean(false);};

    const start = (event)=>
        {
            event.preventDefault();
            var formData = new FormData(event.target);
            setDifficulty(parseInt(formData.get('difficulty')));
            setBoolean(true)
        }

    if (boolean == true)
        {
            jsx = <Main onComplete={handleCompletion} difficulty={difficulty}/>
        }
    else jsx =
            <form onSubmit={start}>
                <h1>ドラゴン討伐ゲーム</h1>
                難易度:
                <input type="number" name="difficulty" min="1" max="3" required></input>
                <button type="submit">開始</button>
            </form>

    return (
        <div>
            {jsx}
        </div>
    )
}


export default ReactTest;