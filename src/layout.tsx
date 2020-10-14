import useCustomVars from './core/useCustomVars';
import {_window, container,gridArray, grid} from './core/vars';

// function validateScale(scale:string){
//     if(scale != 'auto' && parseInt(scale) < 1) throw new Error('The min scale is: 1');
// }


export default function(customVars:object) : object{
    const {container_mt} = useCustomVars(customVars);

    return {

        /*

            Container

        */

        container:(size:string = 'sm') => {
            let deviceSize:any = gridArray.find(item => item.min <= _window.width && item.max >= _window.width);
            let containerSize = grid[size];
            let width = _window.width;
            if(size !== 'fluid'){
                if(deviceSize.min >= containerSize.min){
                        width = container[deviceSize.size+'_width'];
                    }
            }
            let props:{[key:string]:any} = {
                marginTop: container_mt,
                flex: 1,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
            if(width <= _window.width) props.width = width;
            return props;
        },

        /*

            Grid

        */

        row:{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            flexWrap:'wrap'
        },

        col:(scale:string) => {
            console.log(scale, ((100/12)*parseInt(scale))+'%')
            return {
                width: ((100/12)*parseInt(scale))+'%'
            }
        },
    }
};