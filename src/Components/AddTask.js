import {useState} from  'react'

const AddTask = ({onAdd}) =>
{
    const [text, setText]= useState('')
    const [day,setDay]= useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>
    {
        e.preventDefault()

        if (!text){
            alert('Please add task')
            return
        }

        onAdd({text,day,reminder})

        setText('');
        setDay('');
        setReminder('');
    }


    return(
        <form className='add-form'  onSubmit={onSubmit} >

            <div className='form-control'>
                <label>Event</label>
                <input type='text' placeholder='Add Event'
                       value={text}
                       onChange={(e)=>
                            setText(e.target.value)} />
            </div>

            <div className='form-contol' >
                <label>Day And Time</label>
                <input type='text' placeholder='Add Day and Time'
                       onChange={(e)=>
                           setDay(e.target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                       checked={reminder}
                       value={reminder}
                       onChange={(e)=>
                           setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='save task'
                   className='btn btn-block'
            />

        </form>
    )
}
export default AddTask
