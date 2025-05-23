<?php

namespace App\Actions\Fortify;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Services\RegisterService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        // $password_rules = array_merge(
        //     (new UserRequest())->rules()['password'],
        //     ['confirmed']
        // );
        // Validator::make($input, [
        //     'email' => [
        //         'required',
        //         'string',
        //         'email',
        //         'max:255',
        //         Rule::unique(User::class),
        //     ],
        //     // 'password' => $this->passwordRules(),
        //     'password' => $password_rules
        // ])->validate();
        
        Validator::make($input, (new UserRequest())->rules())->validated();
        
        return RegisterService::store($input);

        // return User::create([
        //     'email' => $input['email'],
        //     'password' => Hash::make($input['password']),
        // ]);
    }
}
