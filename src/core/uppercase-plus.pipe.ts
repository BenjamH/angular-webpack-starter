import {Pipe, PipeTransform, Injectable} from 'angular2/core';
import {isString, CONST, isBlank} from 'angular2/src/facade/lang';
import {InvalidPipeArgumentException} from 'angular2/src/common/pipes/invalid_pipe_argument_exception';

@CONST()
@Pipe({name: 'uppercasePlus'})
@Injectable()
export class UppercasePlusPipe implements PipeTransform {
    transform(value: string, args: any[]) {
        if (isBlank(value)) return value;
        if (!isString(value)) {
            throw new InvalidPipeArgumentException(UppercasePlusPipe, value);
        }
        return value.toUpperCase() + " + ";
    }
}