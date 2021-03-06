import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './add-repo.css'
import { useState } from 'react';
import {addItem} from 'component/list-repo/list-repo-slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddRepoComponent() {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [item,setItem] = useState({
    name:'',
    id:0,
    description: '',
    watchers_count:0,
    language:'',
    open_issues:0,
    private:false,
  })

  const handleChange = (event:any) => {
    switch (event.target.name) {
      case "name":
        item.name = event.target.value;
        break;
      case "id":
        item.id = event.target.value;
        break;
      case "description":
        item.description = event.target.value;
        break;
      case "watchers_count":
        item.watchers_count = event.target.value;
        break;
      case "language":
        item.language = event.target.value;
        break;
      case "open_issues":
        item.open_issues = event.target.value;
        break;
      case "private":
        item.private = event.target.checked;
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setItem({
      name: item.name,
      id: item.id,
      description: item.description,
      watchers_count: item.watchers_count,
      language: item.language,
      open_issues: item.open_issues,
      private:item.private,
    })
    dispatch(addItem(item))
    toast.success('CREATE SUCCESS', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      progress: undefined,
    });
    navigate('/list-repo')
  }
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <div className='d-flex mt-5 justify-content-between'>
              <h2>ADD ITEM</h2>
              <Button onClick={() => navigate('/list-repo')}><ChevronRightIcon></ChevronRightIcon>Back</Button>
            </div>
            <form className='d-flex flex-column justify-content-between' onSubmit={handleSubmit}>
              <TextField
                  required
                  id="outlined-required"
                  label="Id"
                  name='id'
                  onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="Name"
                name='name'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="description"
                name='description'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="language"
                name="language"
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="watchers_count"
                name='watchers_count'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="open_issues"
                name='open_issues'
                onChange={handleChange}
                />
              <FormControlLabel
                control={
                  <Checkbox
                    id="private" 
                    name="private"
                    onChange={handleChange}
                  />
                }
                label="Private"
              />
              <Button type="submit" value="Submit">Submit</Button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default AddRepoComponent;