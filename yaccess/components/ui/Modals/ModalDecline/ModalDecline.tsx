import Subtitle from "../../Subtitle/Subtitle";
import Button from "../../Button/Button";
import Title from "../../Title/Title";

const ModalDecline = () => {
    return (
        <div className="">
            <div>
                <Subtitle text="Do you really want to decline ?" color="blue-primary"></Subtitle>
                <label htmlFor="justification" >Justification <span className="text-red-400">*</span> :</label>
                <br/>
                <textarea name="justification" id="justification" cols={30} rows={4} required></textarea>
                <div className="flex gap-4">
                    <Button text="Yes" size="medium"></Button>
                    <Button text="No" type="secondary" size="medium"></Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDecline;
