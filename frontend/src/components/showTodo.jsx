import React from 'react'

function showTodo() {
  return (
    <section className="container">
    <Link to="/create-todo" className="button-new">
        <button className="button">New</button>
    </Link>
    <section className="contents">
        <h1>TODO</h1>
        <ul className="list-container">
            {todo.map((data) => (
                <TodoCard
                    data={data}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    </section>
    {open ? (
        <section className="update-container">
            <div className="update-contents">
                <p onClick={handleClose} className="close">
                    &times;
                </p>

                <UpdateTodo
                    _id={id}
                    handleClose={handleClose}
                    handleUpdate={handleUpdate}
                />
            </div>
        </section>
    ) : (
        ""
    )}
</section>
  )
}

export default showTodo