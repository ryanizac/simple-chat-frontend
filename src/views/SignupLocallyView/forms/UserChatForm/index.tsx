import { ImageFileSvg } from '@/assets/svg/ImageFileSvg'
import { Circle } from '@/components/Circle'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { Form, Input, InputGroup, Label } from '@/components/form'
import { InputImage } from '@/components/form/InputImage'
import { InputRadioButton } from '@/components/form/InputRadioButton'
import { H2 } from '@/components/template/H2'
import { Row } from '@/components/template/Row'

type UserChatFormProps = {}

export function UserChatForm(props: UserChatFormProps) {
  return (
    <Form>
      <H2>Chat Data</H2>
      <InputGroup>
        <Label htmlFor="profile_image">Profile Picture</Label>
        <InputImage
          id="profile_image"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uol.com.br%2Fbichos%2Ffaq%2Ftudo-o-que-voce-precisa-saber-sobre-como-educar-um-cachorro.htm&psig=AOvVaw0vN4IlWkA26Aj5q4yLFBVx&ust=1675178118989000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOih6fjK7_wCFQAAAAAdAAAAABAD"
        >
          <ImageFileSvg />
        </InputImage>
      </InputGroup>
      <InputGroup>
        <Label>Status</Label>
        <Row gap={16}>
          <InputRadioButton name="status" value="online" defaultChecked>
            <Circle size={8} background="green" />
            Online
          </InputRadioButton>
          <InputRadioButton name="status" value="offline">
            <Circle size={8} background="red" />
            Offline
          </InputRadioButton>
        </Row>
      </InputGroup>
      <PrimaryButton>Continue</PrimaryButton>
    </Form>
  )
}
