import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='w-full h-screen flex   bg-yellow-200'>
      <div className=' flex   w-1/2  items-center justify-center  '>
     
    <Form
      className=' w-[60%] rounded-md shadow-2xl flex py-8 px-8 justify-center flex-col bg-white '
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        // maxWidth: 360,
      }}
      onFinish={onFinish}
    >
       <h2 className='text-center text-2xl mb-5 font-medium'>Welcome  & Login  To Mukti !!</h2>
      <Form.Item
      className=''
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input className='w-full' prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
      className=''
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item className=''>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link  className='text-blue-400  hover:text-blue-800' href="">Forgot password</Link>
        </Flex>
      </Form.Item>

      <Form.Item  className=''>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        

       <h3 className='text-center text-lg font-medium mt-4'>Or <br /> <Link to={'/signup'}>
        Register
       </Link></h3>
      </Form.Item>
    </Form>
      </div>

    <div className='w-1/2 flex justify-center items-center'>
    <img className='' src='Login.svg'  alt='/image'  />

    </div>
    </div>
  );
};

export default Login;
