<?php

namespace App\Transformers\Users;

use App\Models\Role;
use League\Fractal\TransformerAbstract;

/**
 * Class RolTransformer.
 */
class RoleTransformer extends TransformerAbstract
{
    protected array $defaultIncludes = ['permissions'];

    /**
     * @param \App\Models\Role $model
     * @return array
     */
    public function transform(Role $model)
    {
        return [
            'id'         => $model->uuid,
            'name'       => $model->name,
            'created_at' => $model->created_at->toIso8601String(),
            'updated_at' => $model->updated_at->toIso8601String(),
        ];
    }

    /**
     * @param Role $model
     * @return \League\Fractal\Resource\Collection
     */
    public function includePermissions(Role $model)
    {
        return $this->collection($model->permissions, new PermissionTransformer());
    }
}
