import React from 'react';
import logo from "../photos/logo.png";

const Login = () => {
    return (
        <div className="w-full h-screen flex bg-[#1e1e1e] flex-col">
            <div className="h-1/5 w-full flex justify-center items-center">
                <img src={logo} alt="logo" className="flex h-32"/>
            </div>
            <div  className="h-2/3 w-full justify-evenly items-center flex flex-col">
                <div className="flex w-full justify-center items-center">
                    <p>PIESLĒGTIES</p>
                </div>
                <div className="h-1/3 justify-evenly items-center flex flex-col">
                    <div className="flex w-72 h-12 border-[#464646] drop-shadow rounded text-left">
                        <p className="flex text-[#D0DFE5] font-bold text-xs ">IEVADIET E-PASTU</p>
                    </div>
                    <div className="flex w-72 h-12 border-[#464646] drop-shadow rounded text-left">
                        <p className="flex text-[#D0DFE5] font-bold text-xs ">IEVADIET PAROLI</p>
                    </div>
                    <div className="flex w-72 h-12 bg-[#464646] drop-shadow rounded text-center justify-center items-center">
                        <p className="flex text-[#D0DFE5] text-base font-light">PIESLĒGTIES</p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-1/5 justify-evenly items-center">
                    <p className="flex font-light text-[#D0DFE5] text-base">Jums nav izveidots konts?</p>
                    <p className="flex font-light text-[#0C8CE9] text-base">Reģistrēties</p>
                </div>
            </div>
        </div>
    );
};

export default Login;