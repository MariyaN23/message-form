import { Button, Form, Input, notification } from "antd"
import TextArea from "antd/es/input/TextArea";
import { API } from "../api/api";
import { MessageType } from "../types/message";
import { useState } from "react";

export const FormPage = () => {
    const [api, contextHolder] = notification.useNotification()
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async (data: MessageType) => {
        try {
            setIsLoading(true)
            await API.addMessage(data)
            api.success({
                message: 'Отправлено',
                description: 'Ваше сообщение будет рассмотрено в ближайшее время',
            })
            form.resetFields()
        } catch (error) {
            api.error({
                message: 'Сообщение не отправлено',
                description: `${error}`,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={'container mx-auto'}>
            {contextHolder}
            <Form
                name="form"
                className={'max-w-sm mx-auto'}
                onFinish={onSubmit}
                form={form}
            >
                <Form.Item
                    label="Имя"
                    name={'username'}
                    rules={[
                        {required: true, message: 'Введите имя'},
                        {min: 2, message: 'Имя должно быть не менее 2 символов'}
                    ]}
                    required
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Телефон"
                    name={'phone'}
                    rules={[
                        {required: true, message: 'Введите номер телефона'},
                        {pattern: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/, message: 'Введите правильный номер телефона'}
                    ]}
                    required
                >
                    <Input placeholder={'+375... или 80...'} />
                </Form.Item>
                <Form.Item
                    label="Ваше сообщение"
                    name={'message'}
                    rules={[
                        {required: true, message: 'Введите сообщение'},
                        {min: 2, message: 'Сообщение должно быть не менее 2 символов'}
                    ]}
                    required
                >
                    <TextArea />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}