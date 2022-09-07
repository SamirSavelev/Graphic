import { FC, useRef, useState } from "react";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
import WithToolTip from "../../HOCs/WithReactToolTip";
import { IDropdown, IMenuItem } from "../../interfaces";
import Text from "../../Text";
import { DropdownStyles } from "./styles";
import down from "../../../assets/down.svg";
import Image from "next/image";
import DropdownItem from "./components/DropdownItem";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const { Container, Arrow, Popup, Input } = DropdownStyles;
const { Column } = CommonUseComponents;

const Dropdown: FC<IDropdown> = ({ id, menuItems, header, data, setData }) => {
  const ref = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };

  useOutsideClick(ref, close);

  const activeItemHandler = (item: any) => () => {
    setData(item);
    setIsShow(false);
  };

  return (
    <Column spaceBetween ref={ref}>
      <Container id={id} spaceBetween onClick={open}>
        <Column spaceBetween>
          <Text small withTooltip>
            {header}
          </Text>
          <Input
            id={id}
            value={isShow ? `Выберите тип устройства` : data?.title}
            disabled
            isShow={isShow}
          />
        </Column>
        <Column>
          <Arrow rotate={isShow}>
            <Image src={down} alt="" />
          </Arrow>
        </Column>
      </Container>

      {isShow && (
        <Popup id={id}>
          {menuItems &&
            menuItems.map((item: IMenuItem, index: number) => {
              return (
                <DropdownItem onClick={activeItemHandler(item)} key={index}>
                  {item?.title}
                </DropdownItem>
              );
            })}
        </Popup>
      )}
    </Column>
  );
};

export default Dropdown;
