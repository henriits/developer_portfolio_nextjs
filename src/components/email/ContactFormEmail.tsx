import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-neutral-900 text-white">
                    <Container>
                        <Section className="bg-neutral-400 border-white px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You have a new message from your portfolio
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>
                                The sender&rsquo;s email is: {senderEmail}{" "}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
export default ContactFormEmail;
