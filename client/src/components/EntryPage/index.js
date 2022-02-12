import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import dotdaycoffeegraphic from '../../images/dotdaycoffeegraphic.png';
import './index.css';

function EntryPage() {
    const {id} = useParams();
    const [entry, setEntry] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/journal_entries/${id}`)
        .then((r) => r.json())
        .then((entryData) => setEntry(entryData))

        fetch(`/journal_entries/${id}/answers`)
        .then((r) => r.json())
        .then((answerData) => setAnswers(answerData))
     }, [id])

     function handleSetDelete() {
        setDeletePopUp(!deletePopUp);
     }

     function handleDelete(id) {
        const config = {
          method: 'DELETE',
        }
        fetch(`/journal_entries/${id}`, config)
        .then(() => navigate('/profile'));
      };

      console.log(deletePopUp);

    if (deletePopUp === true) {
        return (
            <div>
                <div className='deletepopup'>
                    <p className='entrypagep'>Delete this entry permanently?</p>
                    <button className='entrypagedeletebutton' onClick={() => handleDelete(entry.id)}>DELETE ENTRY</button>
                    <button className='entrypagedeletebutton' onClick={handleSetDelete}>BACK TO ENTRY</button>
                </div>
                <div className='entrypagecontainerblur'>
                    <div className='entrypageleft'>
                        <div className='entrypagetitle'>Entry Details</div>
                        <img className='entrypagecoffeeimage' alt='entry head' src={dotdaycoffeegraphic}></img>
                        <p className='entrypagedate'>Published: {entry.date}</p>
                        <Link className='entrypagelink' to={`/editentry/${id}`}>EDIT ENTRY</Link>
                        <div>
                            <button className='entrypagebutton'>DELETE ENTRY</button>
                        </div>
                    </div>
                    <div className='entrypagemiddle'>
                        <div className='entrypagemiddletitle'>Entry Answers</div>
                        {
                            answers.map((answer) => {
                                return (<div className='entrypageinnercolumn' key={answer.id}>
                                            <h5 className='entrypagequestion'>{answer.question.question}</h5>
                                            <p className='entrypageanswer'>{answer.answer}</p>
                                        </div>)
                                })
                        }
                    </div>
                    <div className='entrypageright'>
                        <div className='entrypagetitle'>Entry Check List</div>
                        <div className='entrypagechecklistcolumn'>
                            <p className='entrypageanswer'>Doodled or sketched</p>
                        </div>
                        <div className='entrypagechecklistcolumn'>
                            <p className='entrypageanswer'>Wrote down an idea</p>
                        </div>
                        <div className='entrypagechecklistcolumn'>
                            <p className='entrypageanswer'>Worked on a passion project</p>
                        </div>
                        <div className='entrypagechecklistcolumn'>
                            <p className='entrypageanswer'>Set aside time to brainstorm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
            <div className='entrypagecontainer'>
                <div className='entrypageleft'>
                    <div className='entrypagetitle'>Entry Details</div>
                    <img className='entrypagecoffeeimage' alt='entry head' src={dotdaycoffeegraphic}></img>
                    <p className='entrypagedate'>Published: {entry.date}</p>
                    <Link className='entrypagelink' to={`/editentry/${id}`}>EDIT ENTRY</Link>
                    <div>
                        <button className='entrypagebutton' onClick={handleSetDelete}>DELETE ENTRY</button>
                    </div>
                </div>
                <div className='entrypagemiddle'>
                    <div className='entrypagemiddletitle'>Entry Answers</div>
                    {
                        answers.map((answer) => {
                            return (<div className='entrypageinnercolumn' key={answer.id}>
                                        <h5 className='entrypagequestion'>{answer.question.question}</h5>
                                        <p className='entrypageanswer'>{answer.answer}</p>
                                    </div>)
                            })
                    }
                </div>
                <div className='entrypageright'>
                    <div className='entrypagetitle'>Entry Check List</div>
                    <div className='entrypagechecklistcolumn'>
                        <p className='entrypageanswer'>Doodled or sketched</p>
                    </div>
                    <div className='entrypagechecklistcolumn'>
                        <p className='entrypageanswer'>Wrote down an idea</p>
                    </div>
                    <div className='entrypagechecklistcolumn'>
                        <p className='entrypageanswer'>Worked on a passion project</p>
                    </div>
                    <div className='entrypagechecklistcolumn'>
                        <p className='entrypageanswer'>Set aside time to brainstorm</p>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}

export default EntryPage;