import { loginAPI, RegisterAPI } from '@/services/api';
import type { FormProps } from 'antd';
import { App, Button, Divider, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.scss";

const LoginPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const { message } = App.useApp();
    const navigate = useNavigate();

    interface FieldType {
        email: string;
        password: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log('Success:', values);
        setIsSubmit(true);

        // const res = await loginAPI("admin", "123456");
        const { email, password } = values;
        // console.log(">>>>>>check values:", username, email{, password, phone);
        const res = await loginAPI(email, password);
        console.log('>>>>>>>> check res from login:', res);
        if (res.data) {
            localStorage.setItem('access_token', res.data.access_token);
            message.success("Đăng nhập user thành công.");
            navigate("/");
        } else {
            message.error(res.message);
        }

        setIsSubmit(false);


    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(">>>>>>>check env value:", import.meta.env.VITE_BACKEND_URL);

    return (
        <div>
            <div className="login-page">
                <main className="main">
                    <div className="container">
                        <section className="wrapper">
                            <div className="heading">
                                <h2 className="text text-large">Đăng nhập</h2>
                                <Divider />
                            </div>
                            <Form
                                name="form-login"
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Email không được để trống!' },
                                        { type: "email", message: "Email không đúng định dạng!" }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" loading={isSubmit}>
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                                <Divider>Or</Divider>
                                <p className="text text-normal" style={{ textAlign: "center" }}>
                                    Chưa có tài khoản ?
                                    <span>
                                        <Link to='/register' > Đăng ký</Link>
                                    </span>
                                </p>
                            </Form>
                        </section>
                    </div>
                </main>
            </div >
        </div >
    )
}

export default LoginPage;