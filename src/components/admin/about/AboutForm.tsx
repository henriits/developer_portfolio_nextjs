import { addAbout } from "@/actions/aboutActions";

const AboutForm = () => {
    return (
        <form action={addAbout}>
            <textarea
                rows={3}
                name="content"
                placeholder="write about yourself.."
            />
            <button type="submit">Add About</button>
        </form>
    );
};
export default AboutForm;
