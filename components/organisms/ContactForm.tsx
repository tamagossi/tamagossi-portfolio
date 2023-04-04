import React, { ReactElement } from 'react';
import { HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AtomButton } from '@/components/atoms';

const OrganismContactForm = (): ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5} alignItems="start">
                <HStack spacing={16}>
                    <VStack alignItems="start">
                        <Input
                            focusBorderColor="#FF008C"
                            placeholder="Full name"
                            variant="flushed"
                            width="290px"
                            {...register('full_name', {
                                required: 'Please enter your name',
                            })}
                        />

                        {!!errors?.full_name && (
                            <Text fontSize="sm" color="pink.400">
                                {errors?.full_name?.message as any}
                            </Text>
                        )}
                    </VStack>

                    <VStack alignItems="start">
                        <Input
                            focusBorderColor="#FF008C"
                            placeholder="Email"
                            variant="flushed"
                            width="290px"
                            {...register('email', {
                                required: 'Please enter your email',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />

                        {!!errors?.email && (
                            <Text fontSize="sm" color="pink.400">
                                {errors?.email?.message as any}
                            </Text>
                        )}
                    </VStack>
                </HStack>

                <VStack width="100%" alignItems="start">
                    <Textarea
                        focusBorderColor="#FF008C"
                        placeholder="Tell me what you need"
                        resize="none"
                        rows={3}
                        variant="flushed"
                        {...register('description', {
                            required: 'Please tell me your need',
                        })}
                    />

                    {!!errors?.description && (
                        <Text fontSize="sm" color="pink.400">
                            {errors?.description?.message as any}
                        </Text>
                    )}
                </VStack>

                <div style={{ marginTop: 12 }} />

                <AtomButton type="submit">SEND A MESSAGE</AtomButton>
            </VStack>
        </form>
    );
};

export default OrganismContactForm;
