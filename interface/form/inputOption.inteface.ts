import { MasterService } from '@/services';
import { SelectItem } from '@/components';

type InputOptions = {
	dataSourceParams?: Record<string, any>;
	dataSourceUrl?: string;
	options?: SelectItem[];
	renderOption?: (data: any) => SelectItem;
	service?: MasterService;
};

export default InputOptions;
