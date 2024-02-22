import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateOperations } from "@/redux/actions";
import { ResourceProps } from "@/types";
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalMain,
  ModalActions,
  ModalSave,
  ModalCancel,
} from "@/components/Modal";
import { Box } from "@mui/material";
import { UserProps, dummyUsers } from "@/data";
import { Autocomplete } from "@/components/Inputs";
import UserRow from "../UserRow";

interface Props {
  open?: boolean;
  handleClose?: () => void;
  updateWindowScroll?: boolean;
}

const Share: FC<Props> = ({ open, handleClose, updateWindowScroll }) => {
  const dispatch = useDispatch();
  const {
    operations: { share },
    resources: { data, selected },
  } = useSelector((state: RootState) => state);

  const [userEmail, setUserEmail] = useState<string>("");
  const [users, setUsers] = useState<UserProps[]>([]);
  const [selectedValues, setSelectedValues] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    setSelectedValues([]);
    setUserEmail("");
  }, [open]);

  const fetchSuggestions = async (query: string) => {
    try {
      setLoading(true);
      const abortController = new AbortController();
      setController(abortController);

      const users: UserProps[] = await new Promise((resolve) => {
        setTimeout(() => {
          const filteredUsers: UserProps[] = dummyUsers.filter(
            (user: UserProps) => user.email.toLowerCase().includes(query)
          );
          resolve(filteredUsers);
        }, 1500);
      });
      if (!abortController.signal.aborted) {
        setUsers(users);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleValueChange = async (newValue: string) => {
    setUserEmail(newValue);

    if (controller) {
      controller.abort();
      setController(null);
    }

    if (newValue.length === 0) return;

    fetchSuggestions(newValue);
  };

  const getTitle = (selected: string[]) => {
    const resource = data.find(
      (data: ResourceProps) => data.id === selected[0]
    );

    if (!resource || selected.length > 1)
      return `Share ${selected.length} items`;

    return `Share "${resource.name}"`;
  };

  const onClose = () => {
    dispatch(updateOperations({ share: false }));
  };

  return (
    <Modal
      open={typeof open === "boolean" ? open : share}
      handleClose={typeof handleClose === "function" ? handleClose : onClose}
      updateWindowScroll={updateWindowScroll}
    >
      <ModalBody
        sx={{
          top: "30%",
          transform: "translate(-50%, -30%)",
          maxWidth: "550px",
        }}
      >
        <ModalTitle>{getTitle(selected)}</ModalTitle>
        <ModalMain>
          <Box
            component="div"
            sx={{ position: "relative", margin: "15px 0px 10px 0px" }}
          >
            <Autocomplete
              label="Enter user email"
              value={userEmail}
              options={users}
              loading={loading}
              selectedValues={selectedValues}
              handleValueChange={handleValueChange}
              getOptionLabel={(user: UserProps) => user.email}
              handleOptionClick={(values: UserProps[]) => {
                setSelectedValues(values);
              }}
              renderOption={(email: string) => {
                const user: UserProps | undefined = users.find(
                  (user: UserProps) => user.email === email
                );

                if (!user) return <></>;

                return (
                  <UserRow
                    key={user.id}
                    user={user}
                    onClick={() => {
                      let found = false;

                      for (
                        let i = 0;
                        i < selectedValues.length && !found;
                        i++
                      ) {
                        if (selectedValues[i].email === user.email)
                          found = true;
                      }

                      if (!found) setSelectedValues([...selectedValues, user]);
                    }}
                  />
                );
              }}
            />
          </Box>
        </ModalMain>
        <ModalActions>
          <ModalCancel>Cancel</ModalCancel>
          <ModalSave>Done</ModalSave>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default Share;
