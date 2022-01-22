const TodoItem = (props) => {

  const {
    name,
    completed,
    onComplete,
    onDestroy,
    onCheck
  } = props

  return <li className={completed ? 'completed' : ''}>
  <div className="view">
    <input 
      className="toggle" 
      type="checkbox"
      onChange={onCheck}
      checked={completed}
    />
    <label>{name}</label>
    <button className="destroy" onClick={onDestroy}/>
  </div>
  <form>
    <input className="edit" defaultValue={name} />
    <input type="submit" value="Valider" className="hidden" />
  </form>
</li>
}

export default TodoItem;