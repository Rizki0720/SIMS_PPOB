// import React from 'react';

// import FormInput from './../Elements/FormInput';
// import { Formik } from 'formik';
// import * as Yup from 'yup'
// import Button from '../Elements/Button';


// const FromTopUp = () => {
  
//     return (
//         <Formik
//             initialValues={{
//                 top_up_amount:0
//             }}
//             validationSchema={Yup.object({
//                 top_up_amount:Yup.number().required("harus berupa angka")
//             })}
            
//         >
//         {formik => 
              
//             (
//             <form>
//                 <div className="lg:mx-20 mt-20">
//                     <div className='lg:mx-14'>
//                         <p>Silahkan Masukan</p>
//                         <TextLine title="Nominal Top Up"/>
//                     </div>
//                     <div className="flex gap-5 justify-center items-center ">
//                         <div className='w-[500px]'>
//                             <FormInput 
//                                 name="top_up_amount"
//                                 id="top_up_amount"
//                                 type="number"
//                                 placeholder="Masukan nominal top up"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.top_up_amount} 
//                             />
//                             <Button disabled >Top up</Button>
//                         </div>
//                         <div className='gap-2 w-[500px] flex flex-wrap'>
//                             {listHarga.map((item) => (
//                                 <Button key={item.index}>{item.price.toLocaleString("id-ID",{styles:"currency",currency:"IDR"}) }</Button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         )}

//         </Formik>
//     );
// }

// export default FromTopUp;



import React, { useState } from 'react';
import InputForm from './../Elements/input/index';
import Button from './../Elements/Button';
import TextLine from './../Elements/TextLine';
import { useDispatch } from 'react-redux';
import { topUp } from '../../redux/Slice/topUpSlice';
import Modals from '../Elements/Modals';

const FromTopUp = () => {
    const dispatch = useDispatch()
    const [isModal,setIsModal] = useState(false)
    const handleTopup = (event) => {
        event.preventDefault()
        const data = {
            top_up_amount:event.target.top_up_amount.value
        }
        dispatch(topUp(data)).then((result) => {
            if(result.payload){
                setIsModal(true)
            }
        })
    }
    
    return (
       
        <form onSubmit={handleTopup}>
            <div className="lg:mx-12 mt-20">
                <div className='lg:mx-14'>
                    <p>Silahkan Masukan</p>
                    <TextLine title="Nominal Top Up"/>
                </div>
                <div className="flex gap-5 ml-14 ">
                    <div className='w-[500px]'>
                        <InputForm 
                            name="top_up_amount"
                            id="top_up_amount"
                            type="number"
                            placeholder="Masukan nominal top up"
                        /> 
                        <Button type='submit'>Top up</Button>
                    </div>
                {/*     <div className='gap-2 w-[500px] flex flex-wrap'>
                        {listHarga.map((item,index) => (
                            <Button onClick={() => handlePrice(item.price)} key={index}>
                                {item.price.toLocaleString("id-ID",{styles:"currency",currency:"IDR"}) }
                            </Button>
                        ))}
                    </div> */}
                </div>
            </div>
            <Modals title="Top Up Berhasil" open={isModal} onClose={() => setIsModal(false)}/>
        </form>
    );
}

export default FromTopUp;

