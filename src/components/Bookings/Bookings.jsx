
import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function Booking() {
  return (
    <div className="absolute top-8 left-15 w-full max-w-4xl  mx-auto py-8 dark p-2">
      <Tabs defaultValue="upcoming" className="border-b">
        <Tab key='upcoming' title='Upcoming'>
          <div className="grid gap-4">
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Doe</div>
                  <div className="text-muted-foreground">john@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>1 hour</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-06-15</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Consultation for new product launch strategy.</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-muted-foreground">jane@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>30 minutes</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-06-20</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Discuss marketing strategies for upcoming product launch.</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
          <Tab key='past' title='Past'>
          <div className="grid gap-4">
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-muted-foreground">michael@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>45 minutes</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-05-30</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Discuss partnership opportunities for new product line.</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-muted-foreground">emily@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>1 hour</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-05-25</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Discuss product roadmap and feature prioritization.</div>
                </div>
              </CardBody>
            </Card>
          </div>
          </Tab>
          <Tab key='cancelled' title='Cancelled'>
          <div className="grid gap-4">
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Sophia Anderson</div>
                  <div className="text-muted-foreground">sophia@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>1 hour</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-04-15</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Discuss product customization options for enterprise clients.</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Liam Williams</div>
                  <div className="text-muted-foreground">liam@example.com</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Slot Duration</div>
                    <div>30 minutes</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Booking Date</div>
                    <div>2023-04-10</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Reason for Booking</div>
                  <div>Discuss technical integration requirements for new API.</div>
                </div>
              </CardBody>
            </Card>
          </div>
          </Tab>
      </Tabs>
    </div>
  )
}