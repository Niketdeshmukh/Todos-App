import Navbar from "../components/Navbar";
import styles from "../../styles/index.module.css";
import {useState} from 'react';
const index = () => {
const [todos, setTodos] = useState([]); 
const [title, setTitle] = useState(''); 
const [description, setDescription] = useState(''); 

  return (
    <>
      <Navbar />
      <div className="image__styling"></div>
      <div className={styles.todos_container}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              style={{
                width: "90%",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                padding: "10px",
                fontSize: "16px",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              onChange={e => setTitle(e.target.value)}
              value={title}
              id="title"
              placeholder="Enter blog's title"
              name="title"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Describe the blog"
              name="description"
              required
              style={{
                overflowY: 'hidden'
              }}
              onChange={e => setDescription(e.target.value) }
              value={description} 
            />
          </div>
          <div className={styles.form_group}>
            <button type="submit" className={styles.form_submit_btn}>
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
