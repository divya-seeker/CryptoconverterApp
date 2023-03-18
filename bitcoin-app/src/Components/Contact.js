// import React from 'react'
// import { Button, Form, Input, InputNumber } from 'antd';
// // import {on}
// function Contact() {
  
//   return (
//     <>
//       {/* <div className="cont" style={{display:'flex',justifyContent:'center'}} >
//       <p style={{height:'550px',marginTop: '50px'}}>
//       HelpLine no.: +91 6388471984 <br />
//       Email Id: divya.dwivedi.mnnit@gmail.com
//       </p>
//       </div> */}
      
//       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'website']} label="Website">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'introduction']} label="Introduction">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </>
//   )
// }

// export default Contact
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import './contact.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  
  return (
    // <div>
    <div className="abt">
    <Form className='form' {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item style={{color:'#6E260E'}}
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="text" className="success"/>
      </Form.Item>
      <Form.Item style={{color:'#6E260E'}}
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input  type="text" className="success" />
      </Form.Item>
      <Form.Item style={{color:'#6E260E'}}
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber  type="text" className="succes" />
      </Form.Item>
      <Form.Item style={{color:'#6E260E'}} name={['user', 'introduction']} label="Introduction">
        <Input.TextArea  type="text" className="success"/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
      <div className="but">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </div>
      </Form.Item>
    </Form>
    <p style={{marginTop: '50px',fontWeight:'bolder',fontSize:'1.3rem',position:'absolute',right:'1vw',top:'76vh'}}>
      HelpLine no.: +91 6388471984 <br />
      Email Id: divya.dwivedi.mnnit@gmail.com
    </p>
    </div>
    
    // </div>
  );
};
export default App;