import { ImageFileSvg } from '@/assets/svg/ImageFileSvg'
import { Form, InputGroup, Label } from '@/components/form'
import { InputImage } from '@/components/form/InputImage'
import { H2 } from '@/components/template/H2'

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
    </Form>
  )
}
