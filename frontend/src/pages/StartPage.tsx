import { Button, Card } from "antd";
import { PATH } from "../../paths.ts";

export const StartPage = () => {
    return (
        <div className={'container mx-auto'}>
            <Card
                className={'max-w-sm mx-auto'}
                title={'Добро пожаловать!'}
            >
                <div className={'flex flex-col items-center gap-2'}>
                    <p>Чтобы начать заполнение формы, нажмите кнопку ниже:</p>
                    <Button
                        href={PATH.form}
                        type={'primary'}
                    >
                        Далее
                    </Button>
                </div>
            </Card>
        </div>
    )
}