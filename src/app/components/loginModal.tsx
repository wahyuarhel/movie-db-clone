import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'


interface LoginModalProp {
  isOpen: boolean
  onOpenChange(): void
  // onClose(): void
}
const LoginModal = (props: LoginModalProp) => {
  const {
    isOpen,
    onOpenChange
  } = props


  function handleSubmitLogin() {
    console.log('submit login triggered')
  }
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
        <form
          onSubmit={handleSubmitLogin}
        >
          <ModalBody>
            <Input
              autoFocus
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input

              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />

          </ModalBody>
          <ModalFooter>
            <Button color="primary"
              className='bg-lightBlue'
              type="submit"
            >
              Sign in
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal