import React, { useEffect, useState } from 'react';

import { Layout, Button } from 'antd';
const { Content } = Layout;

import { getPlanAllApi, getPlanByIdApi, postPlanApi, putPlanApi, deletePlanApi, IDailyPlan } from '../services/dailyPlanApi';

function NodeServiceLyt(props: any) {
    function handleGetAll () {
        console.log(" ---------- START  ----------")
        console.log(" click get all button ");
        getPlanAllApi().then((res) => {
            console.log(" result ")
            console.log(res)
            console.log(" ---------- END  ----------")
        })
    }
    function handleGetOne () {
        console.log(" ---------- START  ----------")
        console.log(" click get one button ");
        let id = 10000;
        getPlanByIdApi(id).then((res) => {
            console.log(" result ")
            console.log(res)
            console.log(" ---------- END  ----------")
        })

    }
    function handlePost () {
        console.log(" ---------- START  ----------")
        console.log(" click post button ");
        const params: IDailyPlan = {
            title: '跑步',
            subtitle: 'paobu',
            content: '跑步半小时',
            execute_time: '晚上9点',
        }
        postPlanApi(params).then((res) => {
            console.log(" result ")
            console.log(res)
            console.log(" ---------- END  ----------")
        })
    }
    function handlePut () {
        console.log(" ---------- START  ----------")
        console.log(" click put button ");
        
        const params: IDailyPlan = {
            plan_id: 10000,
            title: '跑步222222222222',
            subtitle: 'paobu',
            content: '跑步半小时',
            execute_time: '晚上9点',
        }
        putPlanApi(params).then((res) => {
            console.log(" result ")
            console.log(res)
            console.log(" ---------- END  ----------")
        })
    }
    function handleDelete () {
        console.log(" ---------- START  ----------")
        console.log(" click delete button ");
        deletePlanApi(10000).then((res) => {
            console.log(" result ")
            console.log(res)
            console.log(" ---------- END  ----------")
        })
    }
    return (
        <Content>
            <Button type="primary" style={{marginRight: 8}} onClick={ handleGetAll } >GET All</Button>
            <Button type="primary" style={{marginRight: 8}} onClick={ handleGetOne } >GET One</Button>
            <Button type="primary" style={{marginRight: 8}} onClick={ handlePost } >POST</Button>
            <Button type="primary" style={{marginRight: 8}} onClick={ handlePut } >PUT</Button>
            <Button type="primary" style={{marginRight: 8}} onClick={ handleDelete } >DELETE</Button>
        </Content>
    )
}

export default NodeServiceLyt;