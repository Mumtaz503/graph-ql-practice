import { useMoralis, useWeb3Contract } from "react-moralis"
import address from "../Constants/address.json"
import abi from "../Constants/abi.json";
import { useState, useEffect } from "react";
import { ConnectButton } from "@web3uikit/web3";
import { Button } from "@web3uikit/core";
import { useNotification } from "@web3uikit/core";


export default function Info() {
    const { isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const lockAddress = chainId in address ? address[chainId][0] : null;
    const [structData, setStructData] = useState({
        name: "",
        age: 0
    });
    const dispatch = useNotification();

    function handleChange(event) {
        setStructData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        });
    }

    const {runContractFunction: addInfo} = useWeb3Contract({
        abi: abi,
        contractAddress: lockAddress,
        functionName: "addInfo",
        params: {_age: structData.age, _name: structData.name}
    });

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1);
            handleSuccessNotification(tx);
        } catch (error) {
            console.log(tx);
        }
    }

    const handleSuccessNotification = () => {
        dispatch({
            type: "success",
            message: 'Info Added succesfully',
            title: 'Success',
            // icon: `${ReactElement.}`,
            position:'topR',
        });
    };

    const handleError = async (tx) => {
        // await tx.wait(1);
        handleErrorNotification(tx);
    }

    const handleErrorNotification = (tx) => {
        dispatch({
            type: "error",
            message: `something went wrong ${tx}`,
            title: 'Error',
            position: 'topR',
        })
    }

    return (<div>
        <div className="name--age">
            <label for="username">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            <label for="username">Age</label>
            <input type="text" id="age" name="age" pattern="[0-9]*" onChange={handleChange} />
        </div>
        <div className="button--container">
            {isWeb3Enabled ? <Button
                icon={null}
                onClick={async () => {
                    await addInfo({
                        onSuccess: handleSuccess,
                        onError: handleError,
                    });
                }}
                size="large"
                text="Enter Info"
                theme="primary"
                type="submit"
            /> : <ConnectButton />}
        </div>
        <p>{chainId}</p>
    </div>);
}