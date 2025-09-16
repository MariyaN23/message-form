import { Button, Form, Input, notification } from "antd"
import { FieldType } from "../types/form.ts";
import TextArea from "antd/es/input/TextArea";

export const FormPage = () => {
    const [api, contextHolder] = notification.useNotification()
    const onSubmit = (data: FieldType) => {
        console.log(data)
        api.success({
            message: 'Отправлено',
            description: 'Ваше сообщение будет рассмотрено в ближайшее время',
        })
    }

    return (
        <div className={'container mx-auto'}>
            {contextHolder}
            <Form
                name="form"
                className={'max-w-sm mx-auto'}
                onFinish={onSubmit}
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
                    <Button htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}