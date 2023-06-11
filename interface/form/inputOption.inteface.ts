import { SelectItem } from '@/components';

type InputOptions = {
	dataSourceParams?: Record<string, any>;
	dataSourceUrl?: string;
	options?: SelectItem[];
	renderOption?: (data: any) => SelectItem;
};

export default InputOptions;
