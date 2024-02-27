
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button, CardHeader,
} from "@material-tailwind/react";

export default function StatusCard({
                                 color,
                                 icon,
                                 title,
                                 amount,
                                 percentage,
                                 percentageColor,
                                 percentageIcon,
                                 date,
                             }) {
    return (
        <Card className="mt-6 w-96 max-w-fit mr-5 ">
            <CardBody>

                <CardHeader color={color} iconOnly className="mb-0 p-2 ml-0 mr-0">
                    <div>
                        {icon}
                    <h1>{title}</h1>
                    </div>
                </CardHeader>


                <Typography variant="h5" color="blue-gray" className="mt-3 mb-0">
                    <h1 className="text-3xl">{amount}</h1>
                </Typography>

            </CardBody>

            <CardFooter className="-mt-7 -mb-4" >
                <div className="flex flex-row space-x-1">
                    {percentageIcon}
                    {percentage}
                    <h6 className="texl-xs">{date}</h6>
                </div>
            </CardFooter>

        </Card>
    );
}
