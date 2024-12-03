
import React, { useState } from 'react';
const contentStyle = {
    
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    // background: '#364d79',
  };
import {
  AutoComplete,
  Button,
  Carousel,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from 'antd';
import Crousel from '../ui/Crousel';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 1,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {

  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinishHandler = async (values) => {
    try {
      console.log("Sending request to:", "http://localhost:5173/api/v1/user/register");
      const res = await axios.post("/api/v1/user/register", values);
      if(res.data.success){
        message.success('Register Successful');
        navigate('/login')
      } else{
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error("Something went wrong")
    }
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className='flex  justify-center items-center w-full bg-yellow-200 h-screen'>
        <div className='w-1/2 flex  flex-col  items-center    '>

    <Form
    className='bg-white py-8 px-10 flex flex-col rounded-xl shadow-2xl  justify-center  '
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinishHandler}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
  

      <Form.Item
       id='name'
        name="name"
        label="Full-Name"
        
        rules={[
          {
            type: 'text',
            message: 'Name is required',
          },
          {
            required: true,
            message: 'Please write your name',
          },
        ]}
      >
        <Input values='name' placeholder='Enter Your Full Name' className='' />
      </Form.Item>
   
      <Form.Item
        id='email'
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
      id='password'
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
    
      {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item> */}

      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item> */}
      <Form.Item {...tailFormItemLayout}>
        <Button className='w-full' type="primary" htmlType="submit">
          Register / Sign-up
        </Button>
        <h3 className='text-center text-xl font-medium py-1'>Or</h3>
        <Button  className='w-full ' type="primary" htmlType="submit">
        <Link to={'/login'}>Login</Link>
        </Button>
      </Form.Item>
    </Form>
        </div>
        <div className='w-1/2 mx-10 py-1 rounded-md '>
        <Carousel autoplay>
    <div className=' '>
      <img style={contentStyle} src='Login.svg'/>
    </div>
    <div>
      <img style={contentStyle} src='Login2.svg' />
    </div>
    <div>
      <img style={contentStyle} src="Login3.svg" />
    </div>
   
  </Carousel>
        </div>

    </div>
  );
};

export default Register;