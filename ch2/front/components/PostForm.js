import React from 'react'
import {Form,Button,Input} from 'antd';

import {indexDummy} from '../pages/index';

const PostForm = () => {
    return (
<Form style={{ marginBottom: "20px"}} encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="특별한 일을 기록해주세요" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{ float: 'right'}} htmlType="submit">짹짹</Button>
                </div>
                <div>
                    {indexDummy.imagePaths.map( (v,i) => {
                        return (
                            <div key={v} style={{ display: 'inline-block' }}>
                                <img src={'http://localhost:3000/' +v} style={{ width:'200px' }} alt={v} />
                                <div>
                                    <Button>제거</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </Form>
    )
}

export default PostForm;
