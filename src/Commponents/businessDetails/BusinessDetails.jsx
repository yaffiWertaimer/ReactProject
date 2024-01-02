import { useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import Details from '../../store/Details';
import ServicesStore from '../../store/ServicesStore';

const FormState = observer(() => {

  const [formData, setFormData] = useState({
  
  
    // name: "",
    // address: "",
    // phone: "",
    // owner: "",
    // logo: "",
    // description: "",
    // Img: "https://www.flaticon.com/free-icon/location_9763819"
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (event) => {
  
   // setEditForm(!editForm)
    event.preventDefault();
    console.log("handle-SubFunc");
    Details.postDetails(formData);
    Details.setIsEdit(false);
    ServicesStore.setIsOpen(false)

  }



  return (
    <>
      <form onSubmit={handleSubmit} className='state' >
        {ServicesStore.setIsOpen(true)}
        <label>
          לוגו
          {<img src="https://www.flaticon.com/free-icon/location_9763819" alt="" />}
        </label>
        <br />
        <label>
          שם העסק
          <input
          
            type='text'
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          בעל העסק
          <input type='text' name="owner" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          כתובת:
          <input type='text' name="address" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          טלפון:
          <input type='text' name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          פרטים נוספים:
          <input type='text' name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />

        <button type='submit' >save</button>
      </form>
    </>
  )
})



export default FormState

