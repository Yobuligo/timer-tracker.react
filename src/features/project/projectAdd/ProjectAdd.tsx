import { useState } from "react";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { IProjectAddProps } from "./IProjectAddProps";

export const ProjectAdd: React.FC<IProjectAddProps> = (props) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");

  const onAdd = () => {
    if (title.length > 0) {
      props.onAdd?.(title);
    }
  };

  const onChange = (newValue: string): void => setTitle(newValue);

  return (
    <div>
      <LabeledInput
        label={t(texts.general.title)}
        onChange={onChange}
        onEnter={onAdd}
        value={title}
      />
      <button disabled={title.length === 0} onClick={onAdd}>
        {t(texts.projectAdd.addProject)}
      </button>
    </div>
  );
};
