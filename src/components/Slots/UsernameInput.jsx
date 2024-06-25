import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import axios from "axios";

export default function UsernameInput() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [userName , setUserName]= useState(null)
  const userDbId = sessionStorage.getItem('userDbId')


  const handleSubmit= async ()=>{
      try {
        const submitUsername = await axios.post("/api/v1/users/setUsername", {
          username: userName,
          userDbId:userDbId
        })
        console.log(submitUsername)
      } catch (error) {
        console.log("Something went wrong" , error)
      }
    } 

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="light">Create username</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        className="dark"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">Your username will be part of your personalized booking link (e.g., timeslot.com/yourusername) for clients to book appointments easily.</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  className="text-white"
                  label="username"
                  variant="bordered"
                  value={userName}
                  onChange={(e)=> setUserName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} onClick={handleSubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

